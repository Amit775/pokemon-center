import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateWithoutDexNumbersInput } from "../inputs/PokedexCreateWithoutDexNumbersInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexCreateOrConnectWithoutDexNumbersInput", {})
export class PokedexCreateOrConnectWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexCreateWithoutDexNumbersInput, {
    nullable: false
  })
  create!: PokedexCreateWithoutDexNumbersInput;
}
