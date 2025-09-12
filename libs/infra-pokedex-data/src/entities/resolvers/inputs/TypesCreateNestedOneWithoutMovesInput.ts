import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutMovesInput } from "../inputs/TypesCreateOrConnectWithoutMovesInput";
import { TypesCreateWithoutMovesInput } from "../inputs/TypesCreateWithoutMovesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutMovesInput", {})
export class TypesCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutMovesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
