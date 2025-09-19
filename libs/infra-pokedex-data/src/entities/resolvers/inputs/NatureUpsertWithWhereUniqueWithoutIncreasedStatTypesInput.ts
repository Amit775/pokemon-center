import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateWithoutIncreasedStatTypesInput";
import { NatureUpdateWithoutIncreasedStatTypesInput } from "../inputs/NatureUpdateWithoutIncreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpsertWithWhereUniqueWithoutIncreasedStatTypesInput", {})
export class NatureUpsertWithWhereUniqueWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  update!: NatureUpdateWithoutIncreasedStatTypesInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  create!: NatureCreateWithoutIncreasedStatTypesInput;
}
