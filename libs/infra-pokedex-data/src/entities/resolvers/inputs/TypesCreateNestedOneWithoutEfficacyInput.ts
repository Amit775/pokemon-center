import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutEfficacyInput } from "../inputs/TypesCreateOrConnectWithoutEfficacyInput";
import { TypesCreateWithoutEfficacyInput } from "../inputs/TypesCreateWithoutEfficacyInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutEfficacyInput", {})
export class TypesCreateNestedOneWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutEfficacyInput, {
    nullable: true
  })
  create?: TypesCreateWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutEfficacyInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
