import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonStatScalarWhereInput", {})
export class PokemonStatScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonStatScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonStatScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonStatScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  base_stat?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  effort?: IntFilter | undefined;
}
