import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutEfficacyTargetInput } from "../inputs/TypeCreateWithoutEfficacyTargetInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutEfficacyTargetInput", {})
export class TypeCreateOrConnectWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutEfficacyTargetInput, {
    nullable: false
  })
  create!: TypeCreateWithoutEfficacyTargetInput;
}
