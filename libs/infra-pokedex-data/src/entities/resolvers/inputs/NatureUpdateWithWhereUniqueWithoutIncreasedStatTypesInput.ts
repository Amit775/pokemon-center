import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureUpdateWithoutIncreasedStatTypesInput } from "../inputs/NatureUpdateWithoutIncreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateWithWhereUniqueWithoutIncreasedStatTypesInput", {})
export class NatureUpdateWithWhereUniqueWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  data!: NatureUpdateWithoutIncreasedStatTypesInput;
}
