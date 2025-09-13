import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutFormTypesInput } from "../inputs/TypesCreateOrConnectWithoutFormTypesInput";
import { TypesCreateWithoutFormTypesInput } from "../inputs/TypesCreateWithoutFormTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutFormTypesInput", {})
export class TypesCreateNestedOneWithoutFormTypesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutFormTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutFormTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
