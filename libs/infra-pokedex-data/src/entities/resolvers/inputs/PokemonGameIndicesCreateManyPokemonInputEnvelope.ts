import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateManyPokemonInput } from "../inputs/PokemonGameIndicesCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonGameIndicesCreateManyPokemonInputEnvelope", {})
export class PokemonGameIndicesCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonGameIndicesCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
