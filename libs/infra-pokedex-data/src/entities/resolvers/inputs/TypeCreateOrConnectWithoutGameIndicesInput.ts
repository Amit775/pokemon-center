import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutGameIndicesInput } from "../inputs/TypeCreateWithoutGameIndicesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutGameIndicesInput", {})
export class TypeCreateOrConnectWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutGameIndicesInput;
}
