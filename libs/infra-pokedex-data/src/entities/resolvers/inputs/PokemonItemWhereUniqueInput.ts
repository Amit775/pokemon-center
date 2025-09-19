import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemRelationFilter } from "../inputs/ItemRelationFilter";
import { PokemonItemWhereInput } from "../inputs/PokemonItemWhereInput";
import { PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput } from "../inputs/PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionRelationFilter } from "../inputs/VersionRelationFilter";

@TypeGraphQL.InputType("PokemonItemWhereUniqueInput", {})
export class PokemonItemWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_version_id_item_id?: PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereInput], {
    nullable: true
  })
  AND?: PokemonItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereInput], {
    nullable: true
  })
  OR?: PokemonItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereInput], {
    nullable: true
  })
  NOT?: PokemonItemWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionRelationFilter, {
    nullable: true
  })
  version?: VersionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemRelationFilter, {
    nullable: true
  })
  item?: ItemRelationFilter | undefined;
}
