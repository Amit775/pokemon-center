import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonEggGroupScalarWhereInput", {})
export class PokemonEggGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonEggGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonEggGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonEggGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  egg_group_id?: IntFilter | undefined;
}
