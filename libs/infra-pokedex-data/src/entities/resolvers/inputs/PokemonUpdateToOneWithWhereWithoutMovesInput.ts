import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutMovesInput } from "../inputs/PokemonUpdateWithoutMovesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpdateToOneWithWhereWithoutMovesInput", {})
export class PokemonUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutMovesInput;
}
