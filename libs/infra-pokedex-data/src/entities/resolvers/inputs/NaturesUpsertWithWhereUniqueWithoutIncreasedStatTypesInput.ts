import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateWithoutIncreasedStatTypesInput";
import { NaturesUpdateWithoutIncreasedStatTypesInput } from "../inputs/NaturesUpdateWithoutIncreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpsertWithWhereUniqueWithoutIncreasedStatTypesInput", {})
export class NaturesUpsertWithWhereUniqueWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  update!: NaturesUpdateWithoutIncreasedStatTypesInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutIncreasedStatTypesInput;
}
