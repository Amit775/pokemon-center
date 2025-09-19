import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyPokemonInput } from "../inputs/PokemonMoveCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonMoveCreateManyPokemonInputEnvelope", {})
export class PokemonMoveCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonMoveCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
