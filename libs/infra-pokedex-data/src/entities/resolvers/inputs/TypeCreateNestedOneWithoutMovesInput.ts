import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutMovesInput } from "../inputs/TypeCreateOrConnectWithoutMovesInput";
import { TypeCreateWithoutMovesInput } from "../inputs/TypeCreateWithoutMovesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutMovesInput", {})
export class TypeCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutMovesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}
