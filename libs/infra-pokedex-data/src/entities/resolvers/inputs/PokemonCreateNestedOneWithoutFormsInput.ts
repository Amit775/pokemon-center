import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutFormsInput } from "../inputs/PokemonCreateOrConnectWithoutFormsInput";
import { PokemonCreateWithoutFormsInput } from "../inputs/PokemonCreateWithoutFormsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutFormsInput", {})
export class PokemonCreateNestedOneWithoutFormsInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutFormsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutFormsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutFormsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutFormsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}
