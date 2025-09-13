import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateManyGenerationInput } from "../inputs/PokemonFormGenerationsCreateManyGenerationInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateManyGenerationInputEnvelope", {})
export class PokemonFormGenerationsCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateManyGenerationInput], {
    nullable: false
  })
  data!: PokemonFormGenerationsCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
