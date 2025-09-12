import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateManyPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateManyPokemonFormInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateManyPokemonFormInputEnvelope", {})
export class PokemonFormGenerationsCreateManyPokemonFormInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateManyPokemonFormInput], {
    nullable: false
  })
  data!: PokemonFormGenerationsCreateManyPokemonFormInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
