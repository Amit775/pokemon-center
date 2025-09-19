import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyGenerationInput } from "../inputs/PokemonSpeciesCreateManyGenerationInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateManyGenerationInputEnvelope", {})
export class PokemonSpeciesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyGenerationInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
