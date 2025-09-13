import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutEfficacyTargetInput } from "../inputs/TypesCreateWithoutEfficacyTargetInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutEfficacyTargetInput", {})
export class TypesCreateOrConnectWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutEfficacyTargetInput, {
    nullable: false
  })
  create!: TypesCreateWithoutEfficacyTargetInput;
}
