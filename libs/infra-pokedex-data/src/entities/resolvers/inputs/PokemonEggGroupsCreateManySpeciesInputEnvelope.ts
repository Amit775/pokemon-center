import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateManySpeciesInput } from "../inputs/PokemonEggGroupsCreateManySpeciesInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateManySpeciesInputEnvelope", {})
export class PokemonEggGroupsCreateManySpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateManySpeciesInput], {
    nullable: false
  })
  data!: PokemonEggGroupsCreateManySpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
