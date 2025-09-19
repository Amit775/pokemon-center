import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateManySpeciesInput } from "../inputs/PokemonEggGroupCreateManySpeciesInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateManySpeciesInputEnvelope", {})
export class PokemonEggGroupCreateManySpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateManySpeciesInput], {
    nullable: false
  })
  data!: PokemonEggGroupCreateManySpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
