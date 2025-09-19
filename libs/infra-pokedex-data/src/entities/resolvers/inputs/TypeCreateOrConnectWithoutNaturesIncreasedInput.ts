import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutNaturesIncreasedInput } from "../inputs/TypeCreateWithoutNaturesIncreasedInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutNaturesIncreasedInput", {})
export class TypeCreateOrConnectWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: TypeCreateWithoutNaturesIncreasedInput;
}
