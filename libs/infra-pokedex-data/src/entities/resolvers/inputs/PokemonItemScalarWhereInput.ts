import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonItemScalarWhereInput", {})
export class PokemonItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonItemScalarWhereInput[] | undefined;

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
