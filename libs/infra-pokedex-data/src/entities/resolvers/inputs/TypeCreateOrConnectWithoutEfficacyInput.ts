import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutEfficacyInput } from "../inputs/TypeCreateWithoutEfficacyInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutEfficacyInput", {})
export class TypeCreateOrConnectWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutEfficacyInput, {
    nullable: false
  })
  create!: TypeCreateWithoutEfficacyInput;
}
