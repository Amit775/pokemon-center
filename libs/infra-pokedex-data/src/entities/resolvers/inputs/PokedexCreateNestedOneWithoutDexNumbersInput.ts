import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateOrConnectWithoutDexNumbersInput } from "../inputs/PokedexCreateOrConnectWithoutDexNumbersInput";
import { PokedexCreateWithoutDexNumbersInput } from "../inputs/PokedexCreateWithoutDexNumbersInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexCreateNestedOneWithoutDexNumbersInput", {})
export class PokedexCreateNestedOneWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexCreateWithoutDexNumbersInput, {
    nullable: true
  })
  create?: PokedexCreateWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateOrConnectWithoutDexNumbersInput, {
    nullable: true
  })
  connectOrCreate?: PokedexCreateOrConnectWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexWhereUniqueInput | undefined;
}
