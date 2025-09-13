import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutNaturesInput } from "../inputs/TypesCreateOrConnectWithoutNaturesInput";
import { TypesCreateWithoutNaturesInput } from "../inputs/TypesCreateWithoutNaturesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedManyWithoutNaturesInput", {})
export class TypesCreateNestedManyWithoutNaturesInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutNaturesInput], {
    nullable: true
  })
  create?: TypesCreateWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutNaturesInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;
}
