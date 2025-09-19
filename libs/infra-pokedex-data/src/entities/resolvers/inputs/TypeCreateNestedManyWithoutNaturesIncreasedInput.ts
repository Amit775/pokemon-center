import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutNaturesIncreasedInput } from "../inputs/TypeCreateOrConnectWithoutNaturesIncreasedInput";
import { TypeCreateWithoutNaturesIncreasedInput } from "../inputs/TypeCreateWithoutNaturesIncreasedInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedManyWithoutNaturesIncreasedInput", {})
export class TypeCreateNestedManyWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutNaturesIncreasedInput], {
    nullable: true
  })
  create?: TypeCreateWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutNaturesIncreasedInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;
}
