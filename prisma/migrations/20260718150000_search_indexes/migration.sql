-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateIndex
CREATE INDEX "abilities_identifier_idx" ON "abilities" USING GIN ("identifier" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "items_identifier_idx" ON "items" USING GIN ("identifier" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "moves_identifier_idx" ON "moves" USING GIN ("identifier" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "pokemon_identifier_idx" ON "pokemon" USING GIN ("identifier" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "pokemon_moves_version_group_id_idx" ON "pokemon_moves"("version_group_id");
