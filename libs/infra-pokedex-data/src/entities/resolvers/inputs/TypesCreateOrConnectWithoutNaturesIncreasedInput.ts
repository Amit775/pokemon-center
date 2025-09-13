import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutNaturesIncreasedInput } from "../inputs/TypesCreateWithoutNaturesIncreasedInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutNaturesIncreasedInput", {})
export class TypesCreateOrConnectWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: TypesCreateWithoutNaturesIncreasedInput;
}
