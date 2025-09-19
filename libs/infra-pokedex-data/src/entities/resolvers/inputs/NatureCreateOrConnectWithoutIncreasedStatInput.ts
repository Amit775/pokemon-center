import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutIncreasedStatInput } from "../inputs/NatureCreateWithoutIncreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateOrConnectWithoutIncreasedStatInput", {})
export class NatureCreateOrConnectWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutIncreasedStatInput, {
    nullable: false
  })
  create!: NatureCreateWithoutIncreasedStatInput;
}
