import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateOrConnectWithoutDexNumbersInput } from "../inputs/PokedexesCreateOrConnectWithoutDexNumbersInput";
import { PokedexesCreateWithoutDexNumbersInput } from "../inputs/PokedexesCreateWithoutDexNumbersInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesCreateNestedOneWithoutDexNumbersInput", {})
export class PokedexesCreateNestedOneWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexesCreateWithoutDexNumbersInput, {
    nullable: true
  })
  create?: PokedexesCreateWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesCreateOrConnectWithoutDexNumbersInput, {
    nullable: true
  })
  connectOrCreate?: PokedexesCreateOrConnectWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexesWhereUniqueInput | undefined;
}
