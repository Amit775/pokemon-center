import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupUpdateManyMutationInput } from "../../../inputs/VersionGroupUpdateManyMutationInput";
import { VersionGroupWhereInput } from "../../../inputs/VersionGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionGroupArgs {
  @TypeGraphQL.Field(_type => VersionGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
