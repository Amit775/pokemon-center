import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutEfficacyTargetInput } from "../inputs/TypesCreateOrConnectWithoutEfficacyTargetInput";
import { TypesCreateWithoutEfficacyTargetInput } from "../inputs/TypesCreateWithoutEfficacyTargetInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutEfficacyTargetInput", {})
export class TypesCreateNestedOneWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutEfficacyTargetInput, {
    nullable: true
  })
  create?: TypesCreateWithoutEfficacyTargetInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutEfficacyTargetInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutEfficacyTargetInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
