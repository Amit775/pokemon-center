import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsOrderByWithRelationInput } from "../../../inputs/EncounterConditionsOrderByWithRelationInput";
import { EncounterConditionsWhereInput } from "../../../inputs/EncounterConditionsWhereInput";
import { EncounterConditionsWhereUniqueInput } from "../../../inputs/EncounterConditionsWhereUniqueInput";
import { EncounterConditionsScalarFieldEnum } from "../../../../enums/EncounterConditionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  where?: EncounterConditionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
