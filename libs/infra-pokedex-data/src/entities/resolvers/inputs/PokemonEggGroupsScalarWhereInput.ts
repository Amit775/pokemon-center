import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonEggGroupsScalarWhereInput", {})
export class PokemonEggGroupsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonEggGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonEggGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonEggGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  egg_group_id?: IntFilter | undefined;
}
