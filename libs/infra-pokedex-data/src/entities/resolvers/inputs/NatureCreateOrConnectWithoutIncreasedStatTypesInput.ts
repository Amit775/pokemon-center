import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateWithoutIncreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateOrConnectWithoutIncreasedStatTypesInput", {})
export class NatureCreateOrConnectWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  create!: NatureCreateWithoutIncreasedStatTypesInput;
}
