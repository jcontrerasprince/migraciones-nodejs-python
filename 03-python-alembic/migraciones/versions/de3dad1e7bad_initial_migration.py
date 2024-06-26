"""Initial migration.

Revision ID: de3dad1e7bad
Revises: 
Create Date: 2024-06-26 12:26:49.288399

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'de3dad1e7bad'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('envio',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('desde', sa.String(length=128), nullable=False),
    sa.Column('hasta', sa.String(length=128), nullable=False),
    sa.Column('entrega_estimada', sa.DateTime(), nullable=True),
    sa.Column('creado', sa.DateTime(), nullable=True),
    sa.Column('actualizado', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('envio')
    # ### end Alembic commands ###
