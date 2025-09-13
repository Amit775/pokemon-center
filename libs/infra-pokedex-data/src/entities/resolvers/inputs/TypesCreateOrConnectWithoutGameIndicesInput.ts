import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutGameIndicesInput } from "../inputs/TypesCreateWithoutGameIndicesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutGameIndicesInput", {})
export class TypesCreateOrConnectWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutGameIndicesInput;
}
