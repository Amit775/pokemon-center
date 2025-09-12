import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutFlagMapInput } from "../inputs/MovesCreateOrConnectWithoutFlagMapInput";
import { MovesCreateWithoutFlagMapInput } from "../inputs/MovesCreateWithoutFlagMapInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutFlagMapInput", {})
export class MovesCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MovesCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
