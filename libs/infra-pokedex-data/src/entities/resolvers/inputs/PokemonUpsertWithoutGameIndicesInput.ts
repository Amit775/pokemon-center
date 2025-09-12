import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutGameIndicesInput } from "../inputs/PokemonCreateWithoutGameIndicesInput";
import { PokemonUpdateWithoutGameIndicesInput } from "../inputs/PokemonUpdateWithoutGameIndicesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutGameIndicesInput", {})
export class PokemonUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
