import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyMoveInput } from "../inputs/PokemonMoveCreateManyMoveInput";

@TypeGraphQL.InputType("PokemonMoveCreateManyMoveInputEnvelope", {})
export class PokemonMoveCreateManyMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateManyMoveInput], {
    nullable: false
  })
  data!: PokemonMoveCreateManyMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
