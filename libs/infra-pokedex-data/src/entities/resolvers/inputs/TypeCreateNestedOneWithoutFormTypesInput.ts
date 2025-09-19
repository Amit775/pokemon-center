import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutFormTypesInput } from "../inputs/TypeCreateOrConnectWithoutFormTypesInput";
import { TypeCreateWithoutFormTypesInput } from "../inputs/TypeCreateWithoutFormTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutFormTypesInput", {})
export class TypeCreateNestedOneWithoutFormTypesInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutFormTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutFormTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}
