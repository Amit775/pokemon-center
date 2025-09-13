import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutNaturesIncreasedInput } from "../inputs/TypesCreateOrConnectWithoutNaturesIncreasedInput";
import { TypesCreateWithoutNaturesIncreasedInput } from "../inputs/TypesCreateWithoutNaturesIncreasedInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedManyWithoutNaturesIncreasedInput", {})
export class TypesCreateNestedManyWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutNaturesIncreasedInput], {
    nullable: true
  })
  create?: TypesCreateWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutNaturesIncreasedInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;
}
