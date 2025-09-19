import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateManyPokemonInput } from "../inputs/PokemonStatCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonStatCreateManyPokemonInputEnvelope", {})
export class PokemonStatCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonStatCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonStatCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
