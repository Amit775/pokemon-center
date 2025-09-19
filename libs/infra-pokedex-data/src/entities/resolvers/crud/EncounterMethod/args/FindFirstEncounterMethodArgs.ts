import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodOrderByWithRelationInput } from "../../../inputs/EncounterMethodOrderByWithRelationInput";
import { EncounterMethodWhereInput } from "../../../inputs/EncounterMethodWhereInput";
import { EncounterMethodWhereUniqueInput } from "../../../inputs/EncounterMethodWhereUniqueInput";
import { EncounterMethodScalarFieldEnum } from "../../../../enums/EncounterMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterMethodOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "order"> | undefined;
}
