import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonItemsScalarWhereInput", {})
export class PokemonItemsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonItemsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonItemsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonItemsScalarWhereInput[] | undefined;

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
}
