import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateManyGenerationInput } from "../inputs/PokemonFormGenerationCreateManyGenerationInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateManyGenerationInputEnvelope", {})
export class PokemonFormGenerationCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateManyGenerationInput], {
    nullable: false
  })
  data!: PokemonFormGenerationCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
