import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateManyPokemonFormInput } from "../inputs/PokemonFormGenerationCreateManyPokemonFormInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateManyPokemonFormInputEnvelope", {})
export class PokemonFormGenerationCreateManyPokemonFormInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateManyPokemonFormInput], {
    nullable: false
  })
  data!: PokemonFormGenerationCreateManyPokemonFormInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
