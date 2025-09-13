import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateManyPokemonInput } from "../inputs/PokemonFormsCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonFormsCreateManyPokemonInputEnvelope", {})
export class PokemonFormsCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonFormsCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
