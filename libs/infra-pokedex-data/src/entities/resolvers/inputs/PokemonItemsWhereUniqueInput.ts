import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemsRelationFilter } from "../inputs/ItemsRelationFilter";
import { PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput } from "../inputs/PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput";
import { PokemonItemsWhereInput } from "../inputs/PokemonItemsWhereInput";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionsRelationFilter } from "../inputs/VersionsRelationFilter";

@TypeGraphQL.InputType("PokemonItemsWhereUniqueInput", {})
export class PokemonItemsWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_version_id_item_id?: PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereInput], {
    nullable: true
  })
  AND?: PokemonItemsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereInput], {
    nullable: true
  })
  OR?: PokemonItemsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereInput], {
    nullable: true
  })
  NOT?: PokemonItemsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rarity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionsRelationFilter, {
    nullable: true
  })
  version?: VersionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsRelationFilter, {
    nullable: true
  })
  item?: ItemsRelationFilter | undefined;
}
