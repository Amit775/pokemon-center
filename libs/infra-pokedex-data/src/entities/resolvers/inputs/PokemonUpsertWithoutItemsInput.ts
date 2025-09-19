import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutItemsInput } from "../inputs/PokemonCreateWithoutItemsInput";
import { PokemonUpdateWithoutItemsInput } from "../inputs/PokemonUpdateWithoutItemsInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutItemsInput", {})
export class PokemonUpsertWithoutItemsInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutItemsInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutItemsInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutItemsInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutItemsInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
